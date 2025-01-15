import { cookies } from "next/headers";

export default function TestCookiesPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="mb-4 text-2xl font-bold">Server-Side Cookie Test</h1>
      <p className="mb-4 text-gray-700">
        아래는 서버에서 읽은 `auth_token` 쿠키 값입니다:
      </p>
      {authToken ? (
        <div className="rounded bg-green-100 p-4 text-green-800">
          <strong>Token:</strong> {authToken}
        </div>
      ) : (
        <div className="rounded bg-red-100 p-4 text-red-800">
          쿠키에서 `auth_token` 값을 찾을 수 없습니다.
        </div>
      )}
    </div>
  );
}
