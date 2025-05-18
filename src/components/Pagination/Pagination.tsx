"use client";

import { Pagination } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

interface ClientPaginationProps {
  total: number;
}

export default function ClientPagination({ total }: ClientPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const onChange = (page: number) => {
    router.push(`/?page=${page}`);
  };


  return (
    <div className="p-4 text-white">
      <Pagination
        current={currentPage}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
      />
    </div>
  );
}
