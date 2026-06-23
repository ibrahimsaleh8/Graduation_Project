import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BillingHistory } from "./CompanySubscription";
import { formatDate } from "@/lib/FormatDate";

type Props = {
  billingHistory: BillingHistory;
};
export default function CompanyBillingHistory({ billingHistory }: Props) {
  return (
    <div className="p-5 space-y-5 rounded-2xl border bg-white">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">Billing History</p>
        <p className="text-sm text-gray-500">
          {billingHistory.totalTransactions} Transactions
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
          {billingHistory.records.map((billing) => (
            <TableRow key={billing.subscriptionId}>
              <TableCell className="font-medium py-4">
                {billing.planName}
              </TableCell>

              <TableCell className="font-medium py-4">
                ${billing.amount}
              </TableCell>

              <TableCell className="font-medium py-4">
                {formatDate(billing.purchaseDate)}
              </TableCell>

              <TableCell className="font-medium py-4">
                {formatDate(billing.endDate)}
              </TableCell>

              <TableCell className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    billing.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {billing.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
