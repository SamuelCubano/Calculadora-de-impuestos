let acumulador = 0;
      let contador = 0;

      document.getElementById("taxForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
        const impuesto = salarioBruto * 0.15;
        const seguro = salarioBruto * 0.06;
        const totalDescuentos = impuesto + seguro;
        const salarioNeto = salarioBruto - totalDescuentos;

        acumulador += salarioNeto;
        contador++;

        const promedio = acumulador / contador;

        document.getElementById("impuesto").textContent = `$${impuesto.toFixed(2)}`;
        document.getElementById("seguro").textContent = `$${seguro.toFixed(2)}`;
        document.getElementById("neto").textContent = `$${salarioNeto.toFixed(2)}`;
        document.getElementById("totalDescuentos").textContent = `$${totalDescuentos.toFixed(2)}`;
        document.getElementById("acumulado").textContent = `$${acumulador.toFixed(2)}`;
        document.getElementById("contador").textContent = contador;
        document.getElementById("promedio").textContent = `$${promedio.toFixed(2)}`;

        document.getElementById("taxForm").reset();
      });