"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "./actions";
import { List, ListItem, Section } from "@/components/list";
import { NavigationBar } from "@/components/navigation-bar";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser("1", serializedSub);
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    if (subscription) {
      await unsubscribeUser("1", subscription.endpoint);
    }
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification("1", message);
      setMessage("");
    }
  }

  if (!isSupported) {
    return (
      <Section>
        <ListItem>
          <p>Push notifications are not supported in this browser.</p>
        </ListItem>
      </Section>
    );
  }

  return (
    <Section header="Push Notifications">
      {subscription ? (
        <>
          <ListItem>You are subscribed to push notifications.</ListItem>
          <ListItem action={unsubscribeFromPush}>Unsubscribe</ListItem>
          <ListItem>
            <input
              type="text"
              placeholder="Enter notification message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full"
            />
          </ListItem>
          <ListItem action={sendTestNotification}>Send Test</ListItem>
        </>
      ) : (
        <>
          <ListItem>You are not subscribed to push notifications.</ListItem>
          <ListItem action={subscribeToPush}>Subscribe</ListItem>
        </>
      )}
    </Section>
  );
}

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window),
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <Section
      header="Install App"
      footer={
        isIOS && (
          <p>
            To install this app on your iOS device, tap the share button
            <span role="img" aria-label="share icon">
              {" "}
              ⎋{" "}
            </span>
            and then &quot;Add to Home Screen&quot;
            <span role="img" aria-label="plus icon">
              {" "}
              ➕{" "}
            </span>
            .
          </p>
        )
      }
    >
      <ListItem action={() => {}}>Add to Home Screen</ListItem>
    </Section>
  );
}

export default function Page() {
  return (
    <>
      <NavigationBar title="알림 테스트" />
      <List>
        <PushNotificationManager />
        <InstallPrompt />
      </List>
    </>
  );
}
