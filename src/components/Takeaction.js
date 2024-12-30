import React from "react";
import ActionCard from "./ActionCard";

const TakeAction = () => {
  const handleAction = () => {
    alert("Thank you for taking action!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e8f5fe",
      }}
    >
      <ActionCard
        image="https://example.com/image-url.jpg"
        title="Norway: Stop deep sea mining!"
        description="Norway is preparing to begin deep-sea mining in the Arctic, threatening one of the planet's most remote, ancient, and pristine ecosystems for the sake of profit."
        buttonText="Take Action"
        onAction={handleAction}
      />
    </div>
  );
};

export default TakeAction;
