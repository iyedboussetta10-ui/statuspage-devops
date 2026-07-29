const services = [
    {
        name: "Site web",
        status: "operational"
    },
    {
        name: "API publique",
        status: "operational"
    },
    {
        name: "Authentification",
        status: "degraded"
    },
    {
        name: "Stockage",
        status: "operational"
    }
];

const labels = {
    operational: "Opérationnel",
    degraded: "Dégradé",
    unavailable: "Indisponible"
};

const container = document.getElementById("services");

services.forEach(service => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${service.name}</h2>
        <span class="badge ${service.status}">
            ${labels[service.status]}
        </span>
    `;

    container.appendChild(card);

});

const today = new Date();

document.getElementById("lastUpdate").textContent =
"Dernière mise à jour : " + today.toLocaleString("fr-FR");
