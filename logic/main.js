document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { name: "TV", price: "$142", count: "54" },
    { name: "Laptop", price: "$899", count: "23" },
    { name: "Phone", price: "$699", count: "78" },
    { name: "Tablet", price: "$299", count: "32" },
    { name: "Smart Watch", price: "$199", count: "45" },
    { name: "Headphones", price: "$129", count: "67" },
    { name: "Bluetooth Speaker", price: "$89", count: "120" },
    { name: "Gaming Console", price: "$499", count: "15" },
    { name: "Camera", price: "$399", count: "22" },
    { name: "Smart Home Hub", price: "$179", count: "48" },
    { name: "Router", price: "$79", count: "95" },
    { name: "E-Reader", price: "$149", count: "41" },
    { name: "Wireless Charger", price: "$25", count: "150" },
    { name: "Smart Light", price: "$50", count: "30" },
    { name: "Fitness Tracker", price: "$75", count: "200" },
    { name: "Drone", price: "$350", count: "5" },
    { name: "VR Headset", price: "$250", count: "20" },
    { name: "3D Printer", price: "$600", count: "3" },
    { name: "External Hard Drive", price: "$100", count: "60" },
    { name: "Portable Projector", price: "$220", count: "8" },
    { name: "Electric Scooter", price: "$450", count: "10" },
    { name: "Smart Thermostat", price: "$200", count: "25" },
    { name: "Security Camera", price: "$120", count: "40" },
    { name: "Robot Vacuum", price: "$300", count: "18" },
    { name: "Smart Doorbell", price: "$90", count: "50" },
    { name: "Electric Toothbrush", price: "$70", count: "100" },
    { name: "Action Camera", price: "$150", count: "22" },
    { name: "Smart Lock", price: "$180", count: "12" },
    { name: "Digital Photo Frame", price: "$60", count: "70" },
    { name: "Soundbar", price: "$210", count: "11" },
    { name: "Home Theater System", price: "$700", count: "6" },
    { name: "Smart Plug", price: "$30", count: "90" },
    { name: "Air Purifier", price: "$130", count: "25" },
    { name: "Smart Scale", price: "$50", count: "100" },
    { name: "WiFi Extender", price: "$40", count: "80" },
    { name: "Smart Coffee Maker", price: "$120", count: "15" },
    { name: "Smart Glasses", price: "$250", count: "4" },
    { name: "Bluetooth Tracker", price: "$20", count: "250" },
    { name: "Smart Water Bottle", price: "$45", count: "35" },
    { name: "Smart Ring", price: "$180", count: "7" },
    { name: "Electric Kettle", price: "$35", count: "60" },
    { name: "Portable Charger", price: "$50", count: "110" },
    { name: "Noise Cancelling Headphones", price: "$230", count: "9" },
    { name: "Smart Mirror", price: "$400", count: "2" },
    { name: "Electric Shaver", price: "$90", count: "55" },
    { name: "Smart Scale", price: "$70", count: "100" },
    { name: "Fitness Tracker", price: "$80", count: "200" },
    { name: "Drone", price: "$380", count: "10" },
    { name: "VR Headset", price: "$240", count: "18" },
    { name: "3D Printer", price: "$610", count: "7" },
    { name: "External Hard Drive", price: "$95", count: "66" },
    { name: "Portable Projector", price: "$210", count: "11" },
    { name: "Electric Scooter", price: "$470", count: "13" },
    { name: "Smart Thermostat", price: "$190", count: "28" },
    { name: "Security Camera", price: "$115", count: "39" },
    { name: "Robot Vacuum", price: "$320", count: "16" },
    { name: "Smart Doorbell", price: "$88", count: "51" },
    { name: "Electric Toothbrush", price: "$65", count: "110" },
    { name: "Action Camera", price: "$145", count: "21" },
    { name: "Smart Lock", price: "$185", count: "13" },
    { name: "Digital Photo Frame", price: "$55", count: "73" },
    { name: "Soundbar", price: "$205", count: "12" },
    { name: "Home Theater System", price: "$720", count: "8" },
    { name: "Smart Plug", price: "$35", count: "92" },
    { name: "Air Purifier", price: "$125", count: "29" },
    { name: "Smart Scale", price: "$52", count: "102" },
    { name: "WiFi Extender", price: "$45", count: "84" },
    { name: "Smart Coffee Maker", price: "$115", count: "19" },
    { name: "Smart Glasses", price: "$260", count: "5" },
    { name: "Bluetooth Tracker", price: "$22", count: "252" },
    { name: "Smart Water Bottle", price: "$40", count: "37" },
    { name: "Smart Ring", price: "$182", count: "9" },
    { name: "Electric Kettle", price: "$38", count: "63" },
    { name: "Portable Charger", price: "$55", count: "113" },
    { name: "Noise Cancelling Headphones", price: "$235", count: "10" },
    { name: "Smart Mirror", price: "$410", count: "3" },
    { name: "Electric Shaver", price: "$85", count: "57" },
    { name: "Smart Scale", price: "$75", count: "103" },
    { name: "Fitness Tracker", price: "$85", count: "205" },
    { name: "Drone", price: "$375", count: "12" },
    { name: "VR Headset", price: "$245", count: "19" },
    { name: "3D Printer", price: "$605", count: "9" },
    { name: "External Hard Drive", price: "$105", count: "68" },
    { name: "Portable Projector", price: "$225", count: "15" },
    { name: "Electric Scooter", price: "$455", count: "14" },
    { name: "Smart Thermostat", price: "$195", count: "30" },
    { name: "Security Camera", price: "$118", count: "41" },
    { name: "Robot Vacuum", price: "$315", count: "20" },
    { name: "Smart Doorbell", price: "$85", count: "53" },
    { name: "Electric Toothbrush", price: "$72", count: "115" },
    { name: "Action Camera", price: "$148", count: "24" },
    { name: "Smart Lock", price: "$188", count: "16" },
    { name: "Digital Photo Frame", price: "$60", count: "76" },
    { name: "Soundbar", price: "$200", count: "14" },
  ];

  const tableBody = document.getElementById("productTableBody");

  products.forEach((product) => {
    const row = document.createElement("tr");

    const productName = document.createElement("td");
    productName.textContent = product.name;

    const productPrice = document.createElement("td");
    const priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = product.price;
    productPrice.appendChild(priceSpan);

    const productCount = document.createElement("td");
    const countSpan = document.createElement("span");
    countSpan.className = "count";
    countSpan.textContent = product.count;
    productCount.appendChild(countSpan);

    row.appendChild(productName);
    row.appendChild(productPrice);
    row.appendChild(productCount);

    tableBody.appendChild(row);
  });
});
