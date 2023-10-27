saldos_finales = [
  [ 'Oscar', 5 ],
  [ 'Suja', 3 ],
  [ 'Puto', -4 ],
  [ 'Sandra', -4 ]
]

resumen = []

jugador, saldo = saldos_finales.pop(0)
deudor, deuda = saldos_finales.pop()

while (len(saldos_finales) >= 0):
    pendiente = min(abs(deuda),saldo)
    resumen.append(f'{deudor} debe pagar {min(abs(deuda), pendiente)} a ${jugador}')

    # solo continua si hay elementos en la lista
    if (len(saldos_finales) == 0):
        break

    if (saldo - pendiente == 0):
        jugador, saldo = saldos_finales.pop(0)
        deuda += pendiente
    else:
        deudor, deuda = saldos_finales.pop()
        saldo -= pendiente
    

print(resumen)