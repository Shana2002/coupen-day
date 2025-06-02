"use client";

import CourseCard from "@/components/CourseCard";
import { PaginationNext, PaginationPervious } from "@/components/Pagination";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchCourses, getTotalCoupons } from "@/services/cource_service";

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [lastPage, setLastPage] = useState(1);

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 6;

  useEffect(() => {
    const loadPageData = async () => {
      const totalDocs = await getTotalCoupons();
      const totalPages = Math.ceil(totalDocs / itemsPerPage);
      setLastPage(totalPages);

      // Redirect to first page if page > totalPages
      if (page > totalPages && totalPages > 0) {
        router.push(`?page=1`);
      }
    };
    loadPageData();
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses(page, itemsPerPage);
      setCourses(data);
    };
    fetchData();
  }, [page]);

  const goToPage = (newPage) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <div className="w-full p-2 flex flex-col items-center">
      <h1 className="text-5xl font-bold my-3">🎓 Course Coupons & Deals</h1>
      <p>
        Discover amazing discounts on top-rated courses. Limited time offers
        with exclusive coupon codes!
      </p>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-3 py-5 px-[5vw] place-items-center">
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </div>
      <div className="w-full h-6 flex items-center justify-center gap-10">
        <PaginationPervious
          isDisable={page <= 1}
          onClick={() => goToPage(page - 1)}
        />
        <div>Page {page}</div>
        <PaginationNext
          isDisable={page >= lastPage}
          onClick={() => goToPage(page + 1)}
        />
      </div>
    </div>
  );
};

export default Page;
