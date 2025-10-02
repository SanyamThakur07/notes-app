import PageWrapper from "@/components/page-wrapper";
import React from "react";

const Page = () => {
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboarod" }]}>
      Homepage
    </PageWrapper>
  );
};

export default Page;
