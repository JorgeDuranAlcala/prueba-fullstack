"use client";
import React, { useState } from "react";

interface DefaultValues {
  name: string;
  email: string;
  phoneNumber: string;
}

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
};

const Input = ({
  label,
  value,
  onChange,
  name,
}: {
  label: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
}) => {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input
        type="text"
        name={name}
        className="flex w-full border border-black rounded p-2"
        value={value || ""}
        onChange={onChange}
      />
    </label>
  );
};

const Form = function ({
  defaultValues,
  onSubmit,
  loading,
}: {
  onSubmit: (values: DefaultValues) => void;
  defaultValues?: DefaultValues;
  loading: boolean;
}) {
  const [values, setValues] = useState<DefaultValues>(
    defaultValues || initialState
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(values);
    setValues(initialState);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <Input
        name="phoneNumber"
        label="Phone number"
        value={values.phoneNumber}
        onChange={handleChange}
      />
      <Input
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit" className="my-4 rounded bg-yellow-400 p-2">
        {loading ? "loading..." : "Confirm"}
      </button>
    </form>
  );
};

export default Form;
