window.onload = function() {
    if (localStorage.getItem("feesPaid") === "true") {
        applyPaidState();
    }
}

function switchScreen(screenId) {
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) targetScreen.classList.remove('hidden');
}

function toggleOutline(outlineId) {
    const outline = document.getElementById(outlineId);
    if (outline) outline.classList.toggle('hidden');
}

function filterSchool(schoolCode) {
    const groups = document.querySelectorAll('.school-group');
    groups.forEach(group => group.classList.add('hidden'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const targetGroup = document.getElementById(`school-${schoolCode}`);
    if (targetGroup) targetGroup.classList.remove('hidden');
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

function clearFees() {
    localStorage.setItem("feesPaid", "true");
    applyPaidState();
    alert("Payment processed! Academic holds have been lifted permanently.");
}

function applyPaidState() {
    const alertBanner = document.getElementById('financial-alert');
    if (alertBanner) alertBanner.classList.add('hidden');
    
    const lockedNotice = document.getElementById('results-locked');
    if (lockedNotice) lockedNotice.classList.add('hidden');
    
    const resultsContent = document.getElementById('results-content');
    if (resultsContent) resultsContent.classList.remove('hidden');
    
    const paymentCard = document.querySelector('.fee-due');
    if (paymentCard) {
        paymentCard.style.borderLeftColor = "#03dac6";
        paymentCard.style.backgroundColor = "#1e1e1e";
        paymentCard.innerHTML = "<h3>Account Cleared</h3><p>All current tuition and secondary fees are fully settled.</p>";
    }
}