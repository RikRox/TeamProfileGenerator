const generateManager = function (manager) {
    return `
    <div>
        <div>
            <div>
                <h3>${manager.name}</h3>
            </div>
            <div>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}