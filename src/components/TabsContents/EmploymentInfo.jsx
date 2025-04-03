import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import {
  Checkbox,
  Input,
  Select,
  ToggleCheckbox,
} from "../Form/Form";
import { ValidationSchema } from "../../Validations/validationSchema";
const EmploymentInfo = () => {
  const formik = useFormik({
    initialValues: {
      employed: false,
      retired: false,
      unemployed: false,
    },
    validationSchema: ValidationSchema,
    validateOnBlur: true, // ✅ Show validation errors on blur
    validateOnChange: true, // Prevent errors from showing immediately while typing
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  return (
    <motion.div
      key="personal"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col border border-orange/25 bg-gradient-to-r from-transparent via-lightDark to-transparent  p-2 rounded-lg mb-4">
        <h3 className="text-sm font-normal capitalize">
          Employment Information (Choose one) *
        </h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid  gap-2 place-content-between place-items-center">
              <ToggleCheckbox label="Employed" name="employed" formik={formik}>
                <div className="flex flex-row p-[1px] rounded-sm mt-2  bg-gradient-to-r from-white/25  via-transparent via-100% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
                  <div class="w-full h-full bg-light p-2 rounded-sm">
                    <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
                      <Input
                        label="Employer*"
                        name="employer"
                        placeholder="Enter Employer*"
                        formik={formik}
                      />
                      <Input
                        label="Years Employed*"
                        name="yearsEmployed"
                        placeholder="Enter Years Employed*"
                        formik={formik}
                      />

                      <Input
                        label="Position*"
                        name="position"
                        placeholder="Enter Position*"
                        formik={formik}
                      />
                      <Input
                        label="Employer Address 1*"
                        name="employerAddress1"
                        placeholder="Enter Employer Address 1*"
                        formik={formik}
                      />
                      <Input
                        label="Employer Address 2*"
                        name="employerAddress2"
                        placeholder="Enter Employer Address 2*"
                        formik={formik}
                      />

                      <Select label="Country" name="country" formik={formik}>
                        <option value="" disabled>
                          Select Your Country
                        </option>
                        <option value="Single">Afghanistan</option>
                        <option value="Married">Married</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Widowed">Widowed</option>
                      </Select>
                      <Select label="State" name="state" formik={formik}>
                        <option value="" disabled>
                          Select Your State
                        </option>
                        <option value="Single">Afghanistan</option>
                        <option value="Married">Married</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Widowed">Widowed</option>
                      </Select>
                      <Input
                        label="Zip Code*"
                        name="zipCode"
                        placeholder="Enter zip code*"
                        formik={formik}
                      />

                      <Input
                        label="Type of Business"
                        name="typeOfBusiness"
                        placeholder="Enter type of business"
                        formik={formik}
                      />
                    </div>
                  </div>
                </div>
              </ToggleCheckbox>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid  gap-2 place-content-between place-items-center">
              <ToggleCheckbox label="Retired" name="retired" formik={formik}>
                <div className="flex flex-row p-[1px] rounded-sm mt-2  bg-gradient-to-r from-white/25  via-transparent via-100% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
                  <div class="w-full h-full bg-light p-2 rounded-sm">
                    <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
                      <Input
                        label="Name of Last Employer*"
                        name="nameOfLastEmployer"
                        placeholder="Enter Name of Last Employer*"
                        formik={formik}
                      />
                      <Input
                        label="Position / Job Title*"
                        name="positionJobTitle"
                        placeholder="Enter Position / Job Title*"
                        formik={formik}
                      />

                      <Input
                        label="Type of Business"
                        name="typeOfBusiness"
                        placeholder="Enter Type of Business"
                        formik={formik}
                      />
                    </div>
                  </div>
                </div>
              </ToggleCheckbox>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid  gap-2 place-content-between place-items-center">
              <Checkbox label="Unemployed" name="unemployed" formik={formik} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmploymentInfo;
