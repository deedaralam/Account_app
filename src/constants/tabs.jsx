import { FaClipboardUser } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { BiSolidLayer } from "react-icons/bi";
import { MdAccountBalance, MdOutlinePreview } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { PiSignatureFill } from "react-icons/pi";

  export const tabs = [
    { id: "personal", label: "Personal Information", icon: FaClipboardUser },
    { id: "employment", label: "Employment Information", icon: FiTarget },
    { id: "investment", label: "Investment Profile", icon: LuUsers },
    { id: "regulatory", label: "Regulatory Items", icon: BiSolidLayer },
    { id: "account", label: "Account Features", icon: MdAccountBalance },
    { id: "document", label: "Document Upload", icon: IoDocuments },
    { id: "signatures", label: "Disclosures & Signatures", icon: PiSignatureFill },
    { id: "review", label: "Review & Submit", icon: MdOutlinePreview },
  ];