import { useRouter } from "next/router";
import React from "react";
import { RWebShare } from "react-web-share";
import Button from "./Button";

export default function WebShare({ title }) {
  const router = useRouter();
  const { pathname, asPath } = router;
  return (
    <div>
      <RWebShare
        data={{
          text: "Share post",
          url: asPath,
          title: title,
        }}
        onClick={() => console.log("shared successfully!", asPath, title)}
      >
        <Button share="true" button outline>
          Share Post
        </Button>
      </RWebShare>
    </div>
  );
}
