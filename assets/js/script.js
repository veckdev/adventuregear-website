/* Footer Year (All Pages) */
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* Gear Checklist (Home) */
(function () {
  const items = document.querySelectorAll(".gear-check");
  const countEl = document.getElementById("checklistCount");
  const readyEl = document.getElementById("checklistReady");
  const resetBtn = document.getElementById("checklistReset");

  if (!items.length || !countEl || !readyEl || !resetBtn) return;

  function updateUI() {
    const total = items.length;
    let checked = 0;

    items.forEach((box) => {
      if (box.checked) checked++;
    });

    countEl.textContent = `${checked} / ${total} items ready`;

    if (checked === total) {
      readyEl.classList.remove("d-none");
    } else {
      readyEl.classList.add("d-none");
    }
  }

  items.forEach((box) => box.addEventListener("change", updateUI));

  resetBtn.addEventListener("click", () => {
    items.forEach((box) => (box.checked = false));
    updateUI();
  });

  updateUI();
})();

/* Products Filter */
(function () {
  const grid = document.getElementById("productsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const priceSelect = document.getElementById("priceRange");

  if (!grid || !filterButtons.length) return;

  const items = grid.querySelectorAll(".product-item");
  let activeCategory = "all";
  let activePrice = "all";

  function matchesPrice(price, mode) {
    if (mode === "all") return true;
    if (mode === "under100") return price < 100;
    if (mode === "100to200") return price >= 100 && price <= 200;
    if (mode === "over200") return price > 200;
    return true;
  }

  function applyFilters() {
    items.forEach((card) => {
      const category = card.getAttribute("data-category");
      const price = Number(card.getAttribute("data-price"));

      const categoryOK = activeCategory === "all" || category === activeCategory;
      const priceOK = matchesPrice(price, activePrice);

      card.classList.toggle("is-hidden", !(categoryOK && priceOK));
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      activeCategory = btn.getAttribute("data-filter");
      applyFilters();
    });
  });

  if (priceSelect) {
    priceSelect.addEventListener("change", () => {
      activePrice = priceSelect.value;
      applyFilters();
    });
  }

  applyFilters();
})();

/* Contact (jQuery Validation) */
(function () {
  if (typeof window.jQuery === "undefined") return;

  const $ = window.jQuery;
  const $form = $("#contactForm");
  if ($form.length === 0) return;

  function showError(selector, message) {
    $(selector).text(message);
  }

  function clearErrors() {
    showError("#errName", "");
    showError("#errEmail", "");
    showError("#errPhone", "");
    showError("#errQueryType", "");
    showError("#errMessage", "");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $form.on("submit", function (e) {
    e.preventDefault();

    clearErrors();
    $("#formSuccess").addClass("d-none");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const queryType = $("#queryType").val();
    const message = $("#message").val().trim();

    let ok = true;

    if (!name) {
      showError("#errName", "Name is required.");
      ok = false;
    }

    if (!email) {
      showError("#errEmail", "Email is required.");
      ok = false;
    } else if (!isValidEmail(email)) {
      showError("#errEmail", "Please enter a valid email address.");
      ok = false;
    }

    if (!phone) {
      showError("#errPhone", "Phone is required.");
      ok = false;
    } else if (!/^\d+$/.test(phone)) {
      showError("#errPhone", "Phone must contain numbers only.");
      ok = false;
    }

    if (!queryType) {
      showError("#errQueryType", "Please select a query type.");
      ok = false;
    }

    if (!message) {
      showError("#errMessage", "Message is required.");
      ok = false;
    } else if (message.length < 10) {
      showError("#errMessage", "Message must be at least 10 characters.");
      ok = false;
    }

    if (ok) {
      $("#formSuccess").removeClass("d-none");
      $form[0].reset();
    }
  });
})();