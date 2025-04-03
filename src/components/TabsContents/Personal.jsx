import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import {
  DateInput,
  Input,
  Select,
  ToggleButton,
  ToggleCheckbox,
} from "../Form/Form";
import { ValidationSchema } from "../../Validations/validationSchema";
const Personal = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
      mailAddress: false,
      trustedContact:false,
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
        <h3 className="text-sm font-normal capitalize">Personal Information</h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
              <Input
                label="First name"
                name="firstName"
                placeholder="Enter first name"
                formik={formik}
              />
              <Input
                label="Middle name"
                name="middleName"
                placeholder="Enter Middle Name"
                formik={formik}
              />
              <Input
                label="Last name"
                name="lastName"
                placeholder="Enter Last Name"
                formik={formik}
              />
              <DateInput
                label="Enter Date of Birth"
                name="DOB"
                placeholder="Enter DOB"
                formik={formik}
              />
              <Input
                label="Number of Dependents*"
                name="NumberOfDependents"
                placeholder="Enter Number of Dependents*"
                formik={formik}
              />
              <Select
                label="Marital Status*"
                name="MaritalStatus"
                formik={formik}
              >
                <option value="" disabled>
                  Select Marital Status
                </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorce">Divorce</option>
                <option value="Widowed">Widowed</option>
              </Select>
              <Input
                label="Email*"
                name="email"
                placeholder="Enter Email*"
                formik={formik}
              />
              <Input
                label="Primary Telephone*"
                name="PrimaryTelephone"
                placeholder="Enter Primary Telephone*"
                formik={formik}
              />
              <Input
                label="Work Telephone"
                name="WorkTelephone"
                placeholder="Enter Work Telephone"
                formik={formik}
              />
              <ToggleButton
                label="Are you USA Citizen"
                name="USACitizen"
                formik={formik}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
              <Select label="Select Id Type*" name="IdType" formik={formik}>
                <option value="" disabled>
                  Select Id Type
                </option>
                <option value="Driver License">Driver License</option>
                <option value="Other Govt ID">Other Govt ID</option>
                <option value="Passport">Passport</option>
              </Select>
              <Input
                label="Id Number"
                name="IDNumber"
                placeholder="Enter Id Number"
                formik={formik}
              />
              <DateInput
                label="Id Issue Date"
                name="IdIssueDate"
                placeholder="Enter Id Issue Date"
                formik={formik}
              />
              <DateInput
                label="Id Expiration Date"
                name="IdExpirationDate"
                placeholder="Enter Id Expiration Date"
                formik={formik}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border border-orange/25 bg-gradient-to-r from-transparent via-lightDark to-transparent  p-2 rounded-lg mb-4">
        <h3 className="text-sm font-normal capitalize">
          Physical Address (No PO Boxes or Mail Drop location)
        </h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
              <Input
                label="Address 1*"
                name="Address1"
                placeholder="Enter Address 1*"
                formik={formik}
              />
              <Input
                label="Address 2*"
                name="Address2"
                placeholder="Enter Address 2*"
                formik={formik}
              />
              <Select label="Country" name="Country" formik={formik}>
                <option value="" disabled>
                  Select Your Country
                </option>
                <option value="Single">Afghanistan</option>
                <option value="Married">Married</option>
                <option value="Divorce">Divorce</option>
                <option value="Widowed">Widowed</option>
              </Select>
              <Select label="State" name="State" formik={formik}>
                <option value="" disabled>
                  Select Your State
                </option>
                <option value="Single">Afghanistan</option>
                <option value="Married">Married</option>
                <option value="Divorce">Divorce</option>
                <option value="Widowed">Widowed</option>
              </Select>
              <Input
                label="City*"
                name="city"
                placeholder="Enter city name*"
                formik={formik}
              />

              <Input
                label="Postal Code"
                name="postal"
                placeholder="Enter postal code"
                formik={formik}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border border-orange/25 bg-gradient-to-r from-transparent via-lightDark to-transparent  p-2 rounded-lg mb-4">
        <h3 className="text-sm font-normal capitalize">
          Mailing Address (May include PO Box or Mail Drop location)
        </h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid  gap-2 place-content-between place-items-center">
              <ToggleCheckbox
                label="Would you like to add a different mailing address?"
                name="mailAddress"
                formik={formik}
              >
                <div className="flex flex-row p-[1px] rounded-sm mt-2  bg-gradient-to-r from-white/25  via-transparent via-100% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
                  <div class="w-full h-full bg-light p-2 rounded-sm">
                    <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
                      <Input
                        label="Mailing Address 1*"
                        name="Mailing1"
                        placeholder="Enter Mailing Address 1*"
                        formik={formik}
                      />
                      <Input
                        label="Mailing Address 2*"
                        name="Mailing2"
                        placeholder="Enter Mailing Address 2*"
                        formik={formik}
                      />
                      <Select label="Country" name="Country" formik={formik}>
                        <option value="" disabled>
                          Select Your Country
                        </option>
                        <option value="Single">Afghanistan</option>
                        <option value="Married">Married</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Widowed">Widowed</option>
                      </Select>
                      <Select label="State" name="State" formik={formik}>
                        <option value="" disabled>
                          Select Your State
                        </option>
                        <option value="Single">Afghanistan</option>
                        <option value="Married">Married</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Widowed">Widowed</option>
                      </Select>
                      <Input
                        label="City*"
                        name="city"
                        placeholder="Enter city name*"
                        formik={formik}
                      />

                      <Input
                        label="Postal Code"
                        name="postal"
                        placeholder="Enter postal code"
                        formik={formik}
                      />
                    </div>
                  </div>
                </div>
              </ToggleCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border border-orange/25 bg-gradient-to-r from-transparent via-lightDark to-transparent  p-2 rounded-lg mb-4">
        <h3 className="text-sm font-normal capitalize">
        Trusted Contact
        </h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid  gap-2 place-content-between place-items-center">
              <ToggleCheckbox
                label="Would you like to add trusted contact?"
                name="trustedContact"
                formik={formik}
              >
                 <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-100% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
              <Input
                label="First name"
                name="firstName"
                placeholder="Enter first name"
                formik={formik}
              />
              <Input
                label="Middle name"
                name="middleName"
                placeholder="Enter Middle Name"
                formik={formik}
              />
              <Input
                label="Last name"
                name="lastName"
                placeholder="Enter Last Name"
                formik={formik}
              />
              <DateInput
                label="Enter Date of Birth"
                name="DOB"
                placeholder="Enter DOB"
                formik={formik}
              />
              <Input
                label="Number of Dependents*"
                name="NumberOfDependents"
                placeholder="Enter Number of Dependents*"
                formik={formik}
              />
              <Select
                label="Marital Status*"
                name="MaritalStatus"
                formik={formik}
              >
                <option value="" disabled>
                  Select Marital Status
                </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorce">Divorce</option>
                <option value="Widowed">Widowed</option>
              </Select>
              <Input
                label="Email*"
                name="email"
                placeholder="Enter Email*"
                formik={formik}
              />
              <Input
                label="Primary Telephone*"
                name="PrimaryTelephone"
                placeholder="Enter Primary Telephone*"
                formik={formik}
              />
              <Input
                label="Work Telephone"
                name="WorkTelephone"
                placeholder="Enter Work Telephone"
                formik={formik}
              />
              <ToggleButton
                label="Are you USA Citizen"
                name="USACitizen"
                formik={formik}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-100% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid grid-cols-10 gap-2 place-content-between place-items-center">
              <Select label="Select Id Type*" name="IdType" formik={formik}>
                <option value="" disabled>
                  Select Id Type
                </option>
                <option value="Driver License">Driver License</option>
                <option value="Other Govt ID">Other Govt ID</option>
                <option value="Passport">Passport</option>
              </Select>
              <Input
                label="Id Number"
                name="IDNumber"
                placeholder="Enter Id Number"
                formik={formik}
              />
              <DateInput
                label="Id Issue Date"
                name="IdIssueDate"
                placeholder="Enter Id Issue Date"
                formik={formik}
              />
              <DateInput
                label="Id Expiration Date"
                name="IdExpirationDate"
                placeholder="Enter Id Expiration Date"
                formik={formik}
              />
            </div>
          </div>
        </div>
              </ToggleCheckbox>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Personal;
