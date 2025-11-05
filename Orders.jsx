import React from "react";
import Layout from "./Layout";
const orders = [
  {
    id: "ORD001",
    name: "John Doe",
    email: "john@example.com",
    address: "123 Street, New York",
    product: "Wireless Headphones",
    price: "120",
    time: "2025-11-04 10:30 AM",
    status: "Delivered",
  },
  {
    id: "ORD002",
    name: "Alice Smith",
    email: "alice@example.com",
    address: "456 Avenue, London",
    product: "Smart Watch",
    price: "180",
    time: "2025-11-04 12:00 PM",
    status: "Pending",
  },
  {
    id: "ORD003",
    name: "Michael Lee",
    email: "michael@example.com",
    address: "789 Park Road, Sydney",
    product: "Bluetooth Speaker",
    price: "95",
    time: "2025-11-03 9:45 PM",
    status: "Shipped",
  },
];

export default function OrderList() {
  return (
    <Layout>
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Customer Orders
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 p-6"
          >
            <p className="mb-1">
              <span className="font-semibold text-gray-700">Order ID:</span>{" "}
              {order.id}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-gray-700">Customer:</span>{" "}
              {order.name}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {order.email}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-gray-700">Address:</span>{" "}
              {order.address}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-gray-700">Product:</span>{" "}
              {order.product}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-gray-700">Price:</span>{" "}
              <span className="text-green-600 font-semibold">
                {order.price}
              </span>
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Time:</span>{" "}
              {order.time}
            </p>

            <div
              className={`mt-3 text-center py-2 rounded-xl font-semibold text-sm ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : order.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
