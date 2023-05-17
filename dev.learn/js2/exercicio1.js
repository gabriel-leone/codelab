function calculoVolume() {
  let raio = document.querySelector("#valorRaio").value
  let altura = document.querySelector("#valorAltura").value
  const pi = 3.1415
  volume = raio * raio * pi * altura
  document.querySelector("#res").innerHTML = volume
}
calculoVolume