export async function loadDashboard() {

    return fetch("/data/dashboard.json")

        .then(r => r.json());

}
