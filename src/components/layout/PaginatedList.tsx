"use client";

import React, { ComponentType, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ItemComponentProps<T> = {
  item: T;
};

type PaginatedListProps<T> = {
  items: T[];
  itemsPerPage?: number;
  ItemComponent: ComponentType<ItemComponentProps<T>>;
  className?: string;
  itemsContainerClassName?: string;
};

export default function PaginatedList<T extends Record<string, any>>({
  items,
  itemsPerPage = 5,
  ItemComponent,
  className = "w-full",
  itemsContainerClassName = "flex flex-col",
}: PaginatedListProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return params.toString();
  };

  const handlePageChange = (page: number) => {
    router.push(`?${createQueryString(page)}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  useEffect(() => {
    if (
      pageParam &&
      (isNaN(parseInt(pageParam)) ||
        parseInt(pageParam) < 1 ||
        parseInt(pageParam) > totalPages)
    ) {
      router.push("?page=1");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pageParam, totalPages, router]);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - Math.floor(itemsPerPage / 2));
    let endPage = Math.min(totalPages, startPage + itemsPerPage - 1);

    if (endPage - startPage + 1 < itemsPerPage) {
      startPage = Math.max(1, endPage - itemsPerPage + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem key="page-1">
          <PaginationLink
            href={`?${createQueryString(1)}`}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={`page-${i}`}>
          <PaginationLink
            href={`?${createQueryString(i)}`}
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      pageNumbers.push(
        <PaginationItem key={`page-${totalPages}`}>
          <PaginationLink
            href={`?${createQueryString(totalPages)}`}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };

  return (
    <section className={className}>
      <ul className={itemsContainerClassName}>
        {currentItems.map((item) => (
          <ItemComponent key={item.title} item={item} />
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  currentPage > 1
                    ? `?${createQueryString(currentPage - 1)}`
                    : "#"
                }
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevious();
                }}
              />
            </PaginationItem>

            {renderPageNumbers()}

            <PaginationItem>
              <PaginationNext
                href={
                  currentPage < totalPages
                    ? `?${createQueryString(currentPage + 1)}`
                    : "#"
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}
