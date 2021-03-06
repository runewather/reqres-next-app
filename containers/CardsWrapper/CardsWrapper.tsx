import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CardsWrapperComponent from "../../components/CardsWrapper/CardsWrapper";

import { getUsers } from "../../api/user";

import { UsersResponse } from "../../interfaces/usersResponse";
import { PaginationRequest } from "../../interfaces/paginationRequest";

const CardsWrapper: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const [usersData, setUserData] = useState<UsersResponse>({
    data: [],
    page: -1,
    per_page: -1,
    total: -1,
    total_pages: -1,
  });

  const handleGetUsers = async ({
    page = 0,
    perPage = 6,
  }: PaginationRequest): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getUsers({ page, perPage });
      setUserData(data);
      setIsLoading(false);
    } catch (e) {
      e instanceof Error
        ? setError(e as Error)
        : setError(new Error("An error ocurred!"));
      setIsLoading(false);
    }
  };

  const nextUserPage = async (): Promise<void> => {
    router.push({
      pathname: "/",
      query: { page: usersData.page + 1, perPage: usersData.per_page },
    });
  };

  const previousUserPage = async (): Promise<void> => {
    router.push({
      pathname: "/",
      query: { page: usersData.page - 1, perPage: usersData.per_page },
    });
  };

  useEffect(() => {
    if (router.isReady) {
      const query = router.query;
      const page = Number(query.page) || 1;
      const perPage = Number(query.perPage) || 6;
      handleGetUsers({ page, perPage });
    }
  }, [router]);

  return (
    <CardsWrapperComponent
      usersData={usersData}
      isLoading={isLoading}
      error={error}
      onNext={nextUserPage}
      onPrevious={previousUserPage}
    />
  );
};

export default CardsWrapper;
