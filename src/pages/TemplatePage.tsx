import { useOutletContext, useSearchParams } from "react-router-dom";
import { OutletContext } from "../models/types";
import { ReactNode } from "react";
import { PageInfo } from "../components/PageInfo/PageInfo";

const TemplatePage = ({
  maxPages,
  children,
}: {
  maxPages: number;
  children: ReactNode;
}) => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const { nextPage, prevPage } = useOutletContext<OutletContext>();

  return (
    <>
      <PageInfo
        page={page}
        maxPages={maxPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4">
        {children}
      </div>
    </>
  );
};

export default TemplatePage;
