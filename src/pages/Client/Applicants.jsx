import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ListCard from "../../components/ListCard/ListCard";
import { useApplicant } from "../../Context/ApplicantContext";

const Applicants = () => {
  const { applicants, loading, error } = useApplicant(); // Ensure context is providing correct values

  if (loading) return <p>Loading applicants...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("Applicants Data:", applicants); // Debugging log

  return (
    <div className="grid grid-cols-6 gap-2">

      <AnimatePresence>
        {Array.isArray(applicants.result) && applicants.result.length > 0 ? (
          applicants.result.map((applicant) => (
            <motion.div
              key={applicant.id || applicant._id} // Ensure a unique key (MongoDB usually uses `_id`)
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full"
            >
              <ListCard
                applicationStatusName={applicant.applicationStatusName}
                accountTypeName={applicant.accountTypeName}
                accountSubType={applicant.type}
                phone={applicant.phone}
                email={applicant.email}
                ipAddress={applicant.ipAddress}
                bank={applicant.bank}
                status={applicant.status}
                applicationGuid={applicant.applicationGuid}
              />
            </motion.div>
          ))
        ) : (
          <p>No applicants found.</p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Applicants;