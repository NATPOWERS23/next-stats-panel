import { Protect } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";
import { ERRORS } from "@/constants/errors";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { FinancesContent } from "./components/FinancesContent/FinancesContent";

export default function FinancesPage() {
  return (
    <Protect
      role={roleList[ROLE.channel_owner]}
      fallback={ERRORS.NO_ACCESS_CRM}
    >
      <PageWrapper content={<FinancesContent />} />
    </Protect>
  );
}