import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/FormatDate";
import { SubscriptionHistoryRecord } from "./hooks/useSubscriptionDetails";

type Props = {
  subscriptionHistory: {
    totalSubscriptions: number;
    records: SubscriptionHistoryRecord[];
  };
};

export default function SubscriptionsHistory({ subscriptionHistory }: Props) {
  return (
    <div className="bg-white p-5 w-full rounded-xl border space-y-6">
      <div className="flex md:items-center justify-between flex-col md:flex-row">
        <p className="font-semibold text-lg">Subscriptions History</p>

        <p className="text-sm text-muted-foreground">
          Total Subscriptions: {subscriptionHistory.totalSubscriptions}
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
          {subscriptionHistory.records.length > 0 ? (
            subscriptionHistory.records.map((subscription, index) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>

                <TableCell>
                  <p className="font-medium">{subscription.planName}</p>
                </TableCell>

                <TableCell className="font-medium">
                  ${subscription.price}
                </TableCell>

                <TableCell className="font-medium">
                  {formatDate(subscription.billingDate)}
                </TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      subscription.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                    {subscription.status}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
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
