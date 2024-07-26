import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <p className="text-xl mb-8 text-center">
        We're here to help. If you have any questions, please don't hesitate to reach out.
      </p>
      <Button asChild>
        <Link to="/contact">Contact Us</Link>
      </Button>
    </div>
  );
};

export default Index;
