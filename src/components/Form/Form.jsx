import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdCalendarToday } from "react-icons/md";
/**
 * Input Component
 */
const Input = ({ label, name, formik, placeholder }) => {
  const isError = formik.touched[name] && formik.errors[name];
  return (
    <div className="flex flex-col">
      {label && (
        <label className="block text-sm mb-2 text-white/50">{label}</label>
      )}
      <div
        className={`border rounded-sm ${
          isError ? "border-orange/50" : "border-white/10"
        }`}
      >
        <input
          type="text"
          name={name}
          placeholder={isError ? formik.errors[name] : placeholder} // ✅ Show error inside placeholder
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full outline-none border-none p-2 text-sm placeholder-opacity-100
          ${
            isError
              ? "text-red-300 placeholder-orange/50"
              : "text-white/50 placeholder-white/30"
          }
        `}
        />
      </div>
    </div>
  );
};
/**
 * Date Input Component
 */
const DateInput = ({ label, name, formik, placeholder }) => {
  const isError = formik.touched[name] && formik.errors[name];
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="block text-sm mb-2 text-white/50">{label}</label>
      )}
      <div
        className={` relative border rounded-sm ${
          isError ? "border-orange/50" : "border-white/10"
        }`}
      >
        <input
          type="date"
          name={name}
          placeholder={isError ? formik.errors[name] : placeholder} // ✅ Show error inside placeholder
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`appearance-none w-full outline-none border-none p-2 text-sm placeholder-opacity-100
          ${
            isError
              ? "text-red-300 placeholder-orange/50"
              : "text-white/50 placeholder-white/30"
          }
        `}
        />
        {/* Calendar Icon */}
        <MdCalendarToday className="absolute right-3 top-2 text-orange text-lg pointer-events-none" />
      </div>
    </div>
  );
};
/**
 * PasswordInput Component
 */
const PasswordInput = ({ label, name, formik }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isError = formik.touched[name] && formik.errors[name];
  return (
    <div className="flex flex-col">
      {label && (
        <label className="block text-sm mb-2 text-white/50">{label}</label>
      )}
      <div
        className={`border rounded-sm relative ${
          isError ? "border-orange/50" : "border-white/10"
        }`}
      >
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={isError ? formik.errors[name] : "Enter password"} // ✅ Show error inside placeholder
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full outline-none border-none p-2 text-sm placeholder-opacity-100
            ${
              isError
                ? "text-orange/50 placeholder-orange/50"
                : "text-white/50 placeholder-white/30"
            }
          `}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-600"
        >
          {showPassword ? (
            <FaEye className="text-orange" />
          ) : (
            <FaEyeSlash className="text-orange" />
          )}
        </button>
      </div>
    </div>
  );
};
/**
 * Select Component
 */
const Select = ({ label, name, children, formik }) => {
  const isError = formik.touched[name] && formik.errors[name];

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="block text-sm mb-2 text-white/50">{label}</label>
      )}

      <div
        className={`border rounded-sm ${
          isError ? "border-orange/50" : "border-white/10"
        }`}
      >
        <select
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full outline-none border-none p-2 text-sm bg-transparent cursor-pointer
          ${
            isError
              ? "text-red-300 border-orange/50"
              : "text-white/50 border-white/30"
          }`}
        >
          {children} {/* This will allow passing options directly */}
        </select>
      </div>
    </div>
  );
};
/**
 * Toggle Button Component (Yes/No)
 */
const ToggleButton = ({ label, name, formik }) => {
  const [isYes, setIsYes] = useState(formik.values[name] || true);

  const handleToggle = () => {
    setIsYes(!isYes);
    formik.setFieldValue(name, !isYes);
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="block text-sm mb-2 text-white/50">{label}</label>
      )}

      <div
        className={`relative flex items-center border rounded-sm w-full cursor-pointer transition-all duration-300 ${
          isYes ? "border-green-500 bg-green-700" : "border-red-500 bg-red-700"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`w-1/2 p-2 text-center text-xs transition-all duration-300 ${
            isYes ? "bg-green-500 text-white" : "bg-transparent text-white/50"
          }`}
        >
          Yes
        </div>
        <div
          className={`w-1/2 p-2 text-center text-xs transition-all duration-300 ${
            !isYes ? "bg-red-500 text-white" : "bg-transparent text-white/50"
          }`}
        >
          No
        </div>
      </div>
    </div>
  );
};
/**
 * Button Component
 */
const Button = ({ label, type = "button", onClick, disabled, loading }) => (
  <div className="flex justify-center mt-10">
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full p-2 rounded-xl text-white text-lg border-none text-center 
    bg-orange  relative overflow-hidden ${
      disabled ? "opacity-50 cursor-not-allowed" : " "
    }`}
    >
      <div className="absolute inset-0 bg-[url('./assets/grain_bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>
      {loading ? "Loading..." : label}
    </button>
  </div>
);
/**
 * Checkbox Component
 */
const Checkbox = ({ label, name, formik }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={formik.values[name]}
        onChange={formik.handleChange}
        className="hidden" // Hide default checkbox
      />
      <label
        htmlFor={name}
        className={`flex items-center gap-2 border rounded-sm p-2 cursor-pointer transition-all
          ${
            formik.values[name]
              ? "border-orange/50 text-orange"
              : "border-white/10 text-white/50"
          }
        `}
      >
        <div
          className={`w-5 h-5 flex items-center justify-center rounded-sm transition-all
            ${formik.values[name] ? "bg-orange" : "bg-white/10"}
          `}
        >
          {formik.values[name] && <span className="text-white text-sm">✔</span>}
        </div>
        {label}
      </label>
    </div>
  );
};
/**
 * ToggleCheckbox Component
 */
const ToggleCheckbox = ({ label, name, formik, children }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={formik.values[name]}
          onChange={formik.handleChange}
          className="hidden" // Hide default checkbox
        />
        <label
          htmlFor={name}
          className={`flex items-center gap-2 border rounded-sm p-2 cursor-pointer transition-all
            ${
              formik.values[name]
                ? "border-orange/50 text-orange"
                : "border-white/10 text-white/50"
            }
          `}
        >
          <div
            className={`w-5 h-5 flex items-center justify-center rounded-sm transition-all
              ${formik.values[name] ? "bg-orange" : "bg-white/10"}
            `}
          >
            {formik.values[name] && (
              <span className="text-white text-sm">✔</span>
            )}
          </div>
          {label}
        </label>
      </div>

      {/* Show children div when checkbox is checked */}
      {formik.values[name] && <div>{children}</div>}
    </div>
  );
};
/**
 * ToggleCheckBoxLink Component
 */
const ToggleCheckBoxLink = ({ label, name, formik, children, link }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={formik.values[name]}
          onChange={formik.handleChange}
          className="hidden" // Hide default checkbox
        />
        <label
          htmlFor={name}
          className={`flex items-center gap-2 border rounded-sm p-2 cursor-pointer transition-all
            ${
              formik.values[name]
                ? "border-orange/50 text-orange"
                : "border-white/10 text-white/50"
            }
          `}
        >
          <div
            className={`w-5 h-5 flex items-center justify-center rounded-sm transition-all
              ${formik.values[name] ? "bg-orange" : "bg-white/10"}
            `}
          >
            {formik.values[name] && <span className="text-white text-sm">✔</span>}
          </div>
          <span>
            {label}{" "}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {link.text}
              </a>
            )}
          </span>
        </label>
      </div>

      {/* Show children div when checkbox is checked */}
      {formik.values[name] && <div>{children}</div>}
    </div>
  );
};
export {
  Input,
  PasswordInput,
  Button,
  Checkbox,
  DateInput,
  ToggleButton,
  Select,
  ToggleCheckbox,
  ToggleCheckBoxLink
};
