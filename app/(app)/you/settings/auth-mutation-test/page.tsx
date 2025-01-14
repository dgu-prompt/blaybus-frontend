import { cookies } from "next/headers";
import { JobQuestsButton } from "./_components/button";

export const dynamic = "force-dynamic";

export default async function AuthTestPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (!authToken) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Authentication Failed
        </h1>
        <p className="text-gray-700">
          No auth token found. Please log in again.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="mb-4 text-2xl font-bold">Auth Test</h1>
      <p className="mb-6 text-gray-700">
        The token was successfully retrieved from cookies.
      </p>
      <JobQuestsButton />
    </div>
  );
}
