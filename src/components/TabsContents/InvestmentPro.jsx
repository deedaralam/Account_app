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
const InvestmentPro = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
      mailAddress: false,
      trustedContact: false,
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
        <h3 className="text-sm font-normal capitalize">Investment Profile</h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid grid-cols-10 gap-2 w-full">
              {/* Select Components */}
              <div className="col-span-2 w-full">
                <Select
                  label="Investment Objective*"
                  name="investmentObjective"
                  formik={formik}
                >
                  <option value="" disabled>
                    Select Investment Objective*
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Widowed">Widowed</option>
                </Select>
              </div>

              <div className="col-span-2 w-full">
                <Select
                  label="Investment Experience*"
                  name="investmentExperience"
                  formik={formik}
                >
                  <option value="" disabled>
                    Investment Experience*
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Widowed">Widowed</option>
                </Select>
              </div>

              <div className="col-span-2 w-full">
                <Select
                  label="Risk Tolerance*"
                  name="riskTolerance"
                  formik={formik}
                >
                  <option value="" disabled>
                    Select Risk Tolerance*
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Widowed">Widowed</option>
                </Select>
              </div>

              <div className="col-span-2 w-full">
                <Select
                  label="Time Horizon*"
                  name="timeHorizon"
                  formik={formik}
                >
                  <option value="" disabled>
                    Select Time Horizon*
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Widowed">Widowed</option>
                </Select>
              </div>

              <div className="col-span-2 w-full">
                <Select label="Tax Bracket*" name="taxBracket" formik={formik}>
                  <option value="" disabled>
                    Select Tax Bracket*
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Widowed">Widowed</option>
                </Select>
              </div>

              {/* Full-Width Inputs */}
              <div className="col-span-full w-full">
                <Input
                  label="Who were you referred by to WDCO?"
                  name="referredWDCO"
                  placeholder="Who were you referred by to WDCO?"
                  formik={formik}
                />
              </div>

              <div className="col-span-full w-full">
                <Input
                  label="If you are planning on bringing in stock, what is the name of the company?"
                  name="planning"
                  placeholder="If you are planning on bringing in stock, what is the name of the company?"
                  formik={formik}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentPro;
