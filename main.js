// INVENTORY

let inventory = [];

        function addProduct() {
            const name = document.getElementById("productName").value;
            const price = document.getElementById("productPrice").value;
            
            if (name && price) {
                inventory.push({ name, price });
                displayInventory();
                document.getElementById("productName").value = "";
                document.getElementById("productPrice").value = "";
            }
        }

        function deleteProduct(index) {
            inventory.splice(index, 1);
            displayInventory();
        }

        function displayInventory() {
            const inventoryDiv = document.getElementById("inventory");
            inventoryDiv.innerHTML = "";
            inventory.forEach((product, index) => {
                inventoryDiv.innerHTML += `<div class='product'>
                    <span>${product.name} - $${product.price}</span>
                    <button class='delete-btn' onclick="deleteProduct(${index})">Delete</button>
                </div>`;
            });
        }
        
        document.getElementById("payButton").addEventListener("click", () => {
            alert("Redirecting to payment gateway...");
            // Here, integrate with a real payment API like Stripe
        });