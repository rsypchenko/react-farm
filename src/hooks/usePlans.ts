import { useEffect, useState } from "react";
import { plansApi } from "../api/plansApi";

export const usePlans = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPlansData = async () => {
    try {
      const plans = await plansApi();
      setPlans(plans);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlansData();
  }, []);

  return {
    plans,
    loading,
    error,
  };
};
