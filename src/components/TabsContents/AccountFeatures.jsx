import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { accountFeatures } from "../../constants/accountFeatures";
import { Input, ToggleCheckbox,ToggleCheckBoxLink } from "../Form/Form";
import { ValidationSchema } from "../../Validations/validationSchema";
const AccountFeatures = () => {
  const combinedItems = [...accountFeatures]; // Merge both arrays

  const initialValues = combinedItems.reduce((acc, item) => {
    acc[item.name] = false; // Default checkbox value: false

    if (item.children) {
      item.children.forEach((child) => {
        acc[child.name] = ""; // Default input value: empty string
      });
    }

    return acc;
  }, {});
  const formik = useFormik({
    initialValues,
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
        <h3 className="text-sm font-normal capitalize">Account Features</h3>
        <div className="flex flex-row p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25  via-transparent via-10% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
          <div class="w-full h-full bg-light p-2 rounded-sm">
            <div className="grid  gap-2 place-content-between place-items-center">
              {accountFeatures.map((item) => (
                <ToggleCheckBoxLink
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  formik={formik}
                  link={item.link} // Pass the link property
                >
                  {item.children && (
                    <div className="p-[1px] rounded-sm mt-2 bg-gradient-to-r from-white/25 via-transparent via-100% to-transparent shadow-[1px_2px_2px_0px_rgba(0,0,0,0.5)]">
                      <div className="grid grid-cols-4 gap-4 p-2 bg-light rounded-sm">
                        {item.children.map((child) => (
                          <div key={child.name} className="col-span-1">
                            <Input
                              label={child.label}
                              name={child.name}
                              placeholder={child.placeholder}
                              formik={formik}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ToggleCheckBoxLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountFeatures;
