function getValue() {
    let mass, gravity, acceleration, time, angle;
    mass = parseFloat(document.getElementById("mass").value);
    gravity = parseFloat(document.getElementById("gravity").value);
    acceleration = parseFloat(document.getElementById("acceleration").value);
    time = parseFloat(document.getElementById("time").value);
    angle = parseFloat(document.getElementById("angle").value);

    let v, vx, vy;
    v = acceleration * time;
    vx = v * Math.cos(angle * Math.PI / 180);
    vy = v * Math.sin(angle * Math.PI / 180);

    if (gravity !== 0) {
    let t_flight = (2 * vy) / gravity;
    let d = vx * t_flight;
    let KiloNewton = (mass * acceleration) / 1000;

    document.getElementById("demo").innerHTML = `
        Velocity (v): ${String(v)}<br>
        Horizontal Velocity (vx): ${String(vx)}<br>
        Vertical Velocity (vy): ${String(vy)}<br>
        Time of Flight (t_flight): ${String(t_flight)}<br>
        Distance (d): ${String(d)}<br>
        KiloNewton: ${String(KiloNewton)}
    `;
    } else {
    document.getElementById("demo").innerHTML = "Error: Gravity cannot be zero.";
    }
}