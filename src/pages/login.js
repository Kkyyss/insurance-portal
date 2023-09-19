import { useCallback } from "react";

import { GoogleOutlined } from "@ant-design/icons";
import { Button, Space, Spin } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function LoginPage() {
  const router = useRouter();
  const { status } = useSession();

  const signInButtonOnClicked = useCallback(() => {
    signIn("google");
  });

  if (status === "loading") {
    return (
      <Space
        direction="vertical"
        style={{
          width: "100%"
        }}
      >
        <Spin />
      </Space>
    );
  }

  if (status === "authenticated") {
    router.replace("/");
    return null;
  }

  return (
    <Space direction="vertical" style={{ width: "100%", textAlign: "center" }}>
      <h3>Login</h3>
      <Button
        type="primary"
        onClick={signInButtonOnClicked}
        icon={<GoogleOutlined />}
      >
        Sign in with Google
      </Button>
    </Space>
  );
}

export default LoginPage;
