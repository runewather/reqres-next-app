import { useEffect, useState } from "react";
import CardsWrapperComponent from "../../components/CardsWrapper/CardsWrapper";

import { getUsers } from "../../api/user";

import { UsersResponse } from "../../interfaces/usersResponse";

const CardsWrapper: React.FC = () => {
  const [usersData, setUserData] = useState<UsersResponse>({
    data: [],
    page: -1,
    per_page: -1,
    total: -1,
    total_pages: -1,
  });

  const handleGetUsers = async (): Promise<void> => {
    const data = await getUsers({ page: 0, perPage: 6 });
    setUserData(data);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return <CardsWrapperComponent usersData={usersData} />;
};

export default CardsWrapper;
