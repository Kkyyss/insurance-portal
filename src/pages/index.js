import { useCallback } from "react";

import { Button, Result, Space, Spin } from "antd";
import Home from "containers/Home";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function IndexPage() {
  const router = useRouter();
  const { status } = useSession();

  const loginButtonOnClicked = useCallback(() => {
    router.replace("/login");
  });

  if (status === "loading") {
    return (
      <Space
        direction="vertical"
        style={{
          width: "100vh"
        }}
      >
        <Spin />
      </Space>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button onClick={loginButtonOnClicked} type="primary">
            Login
          </Button>
        }
      />
    );
  }

  return <Home />;
}

export default IndexPage;
