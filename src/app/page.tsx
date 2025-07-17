import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function Home() {
  return (
    <div className="p-4">
      <SwaggerUI url="/api/docs" />
    </div>
  );
}
