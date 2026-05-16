import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const subscriptions = [
  {
    id: 1,
    plan: "Basic Plan",
    price: "$19",
    billingDate: "13 May, 2026",
    status: "Active",
  },
  {
    id: 2,
    plan: "Pro Plan",
    price: "$49",
    billingDate: "10 May, 2026",
    status: "Expired",
  },
  {
    id: 3,
    plan: "Enterprise Plan",
    price: "$99",
    billingDate: "05 May, 2026",
    status: "Pending",
  },
];

export default function SubscriptionsHistory() {
  return (
    <div className="bg-white p-5 w-full rounded-xl border space-y-6">
      <div className="flex md:items-center justify-between flex-col md:flex-row">
        <p className="font-semibold text-lg">Subscriptions History</p>

        <p className="text-sm text-muted-foreground">
          Total Subscriptions: {subscriptions.length}
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black py-4">#</TableHead>
            <TableHead className="text-black py-4">Plan</TableHead>
            <TableHead className="text-black py-4">Price</TableHead>
            <TableHead className="text-black py-4">Billing Date</TableHead>
            <TableHead className="text-black py-4">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription.id}>
              <TableCell className="font-medium">{subscription.id}</TableCell>

              <TableCell>
                <p className="font-medium">{subscription.plan}</p>
              </TableCell>

              <TableCell className="font-medium">
                {subscription.price}
              </TableCell>

              <TableCell className="font-medium">
                {subscription.billingDate}
              </TableCell>

              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    subscription.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : subscription.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}>
                  {subscription.status}
                </span>
              </TableCell>
            </TableRow>
          ))}

          {subscriptions.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-10 text-muted-foreground">
                No subscription history found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
