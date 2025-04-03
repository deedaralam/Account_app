import statusConfig from "../utils/statusConfig"; // Ensure correct path

const sampleData = Array.from({ length: 50 }, (_, i) => ({
  name: `User ${i + 1}`,
  type: `Account Type ${(i % 3) + 1}`,
  phone: `786-656-66${i}`,
  email: `user${i}@test.com`,
  bank: `XXX-XX-${(1000 + i).toString().slice(-4)}`,
  ip: `192.168.1.${i}`,
  status: Object.keys(statusConfig)[i % Object.keys(statusConfig).length], // Rotate through statuses dynamically
}));

export default sampleData;