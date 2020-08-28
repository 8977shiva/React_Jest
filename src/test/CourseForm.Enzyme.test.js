import React from "react";
import { shallow } from "enzyme";
import CourseForm from "../components/courses/CourseForm";

//  there are two  ways to render React  with enzyme
// 1 shallow: renders single Component
// 2 mount: renders component with Children

//factory  function: for simple  test case and to update default props

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("form").length).toEqual(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

//debug() for debugging
it('labels ave buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toEqual("Save");
});

it('labels ave buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toEqual("Saving...");
});
