import React from "React";
import ProfileBlock from "./ProfileBlock";
import { create } from "react-test-renderer";

const profile = {
  name: "Test",
  gender: "Male",
  birthdate: "13.07.1337",
  city: "Kyiv",
};

test("Profile should return data propertly", () => {
  const component = create(
    <ProfileBlock profile={profile} key={`profile_${index}`} />
  );
  const root = component.root;
  const span = root.findAllByType("span");
  expect(span[1].children[0]).toBe("Test");
  expect(span[2].children[0]).toBe("Male");
  expect(span[3].children[0]).toBe("13.07.1337");
  expect(span[4].children[0]).toBe("Kyiv");
});
