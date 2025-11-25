import React, { useState } from "react";
import TrackingProgress from "./TrackingProgress";

const ShipmentTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const VALID_TRACKING = "SC20252011";

  const shipmentData = {
    currentState: "UK, London",
    destination: "534 1 St SW, Britt, Iowa 50423-1231",
    company: "Group intercontinenal Shipping / Security Company",
    departureDate: "11/21/2025",
  };

  const steps = [
    "Label Created",
    "Packed",
    "Leaving UK",
    "In Transit",
    "Out for Delivery",
    "Delivered",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsValid(trackingNumber === VALID_TRACKING);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800">Shipment Tracking</h2>

      <p className="text-sm text-gray-500">
        This page contains private shipment details. Please keep your tracking information confidential.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter tracking number"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Track
        </button>
      </form>

      {submitted && !isValid && (
        <div className="bg-red-50 p-4 rounded-lg border border-red-300">
          <p className="text-red-700 font-medium">
            No information for the provided tracking number.
          </p>
        </div>
      )}

      {submitted && isValid && (
        <>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Shipment Details</h3>

            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium">Tracking Number:</span> {trackingNumber}</p>
              <p><span className="font-medium">Current Location:</span> {shipmentData.currentState}</p>
              <p><span className="font-medium">Destination:</span> {shipmentData.destination}</p>
              <p><span className="font-medium">Company:</span> {shipmentData.company}</p>
              <p><span className="font-medium">Expected Departure:</span> {shipmentData.departureDate}</p>
            </div>
          </div>

          <div className="mt-6">
            <TrackingProgress steps={steps} currentStep={3} />
          </div>
        </>
      )}
    </div>
  );
};

export default ShipmentTracking;
