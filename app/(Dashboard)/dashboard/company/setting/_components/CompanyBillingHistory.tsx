import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const billingHistory = [
  {
    id: 1,
    planName: "Starter Plan",
    amount: "$19",
    purchaseDate: "12 May, 2026",
    endDate: "12 Jun, 2026",
    status: "Active",
  },
  {
    id: 2,
    planName: "Professional Plan",
    amount: "$49",
    purchaseDate: "02 Apr, 2026",
    endDate: "02 May, 2026",
    status: "Expired",
  },
  {
    id: 3,
    planName: "Enterprise Plan",
    amount: "$99",
    purchaseDate: "18 Mar, 2026",
    endDate: "18 Apr, 2026",
    status: "Expired",
  },
  {
    id: 4,
    planName: "Professional Plan",
    amount: "$49",
    purchaseDate: "05 Feb, 2026",
    endDate: "05 Mar, 2026",
    status: "Expired",
  },
];

export default function CompanyBillingHistory() {
  return (
    <div className="p-5 space-y-5 rounded-2xl border bg-white">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">Billing History</p>
        <p className="text-sm text-gray-500">
          {billingHistory.length} Transactions
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black py-4">Plan Name</TableHead>
            <TableHead className="text-black py-4">Amount</TableHead>
            <TableHead className="text-black py-4">Purchase Date</TableHead>
            <TableHead className="text-black py-4">End Date</TableHead>
            <TableHead className="text-black py-4">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {billingHistory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium py-4">
                {item.planName}
              </TableCell>

              <TableCell className="font-medium py-4">{item.amount}</TableCell>

              <TableCell className="font-medium py-4">
                {item.purchaseDate}
              </TableCell>

              <TableCell className="font-medium py-4">{item.endDate}</TableCell>

              <TableCell className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
