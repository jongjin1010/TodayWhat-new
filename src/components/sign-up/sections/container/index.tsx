import React from "react";
import InformationInputSection from "../information";
import SchoolNameInputSection from "../school";

function SignUpSectionContainer({ section }: { section: number }) {
  return (
    <div>
      {section === 1 && <SchoolNameInputSection />}
      {section === 2 && <InformationInputSection />}
    </div>
  );
}

export default SignUpSectionContainer;
