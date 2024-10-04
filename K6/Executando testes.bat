@echo off
title Escolha de Teste de Performance
:inicio
echo =====================================
echo Escolha um Teste de Performance
echo =====================================
echo 1. Smoke Test - Criar filme
echo 2. Smoke Test - Listar filmes
echo 3. Smoke Test - Listar filme por id
echo 4. Smoke Test - Atualizar filme
echo 5. Smoke Test - Deletar filme
echo 6. Smoke Test - Criar ticket
echo 7. Smoke Test - Fluxo
echo 8. Load Test - Criar filme
echo 9. Load Test - Listar filmes
echo 10. Load Test - Listar filme por id
echo 11. Load Test - Atualizar filme
echo 12. Load Test - Deletar filme
echo 13. Load Test - Criar ticket
echo 14. Load Test - Fluxo
echo 15. Soak Test - Criar filme
echo 16. Soak Test - Listar filmes
echo 17. Soak Test - Listar filme por id
echo 18. Soak Test - Atualizar filme
echo 19. Soak Test - Deletar filme
echo 20. Soak Test - Criar ticket
echo 21. Soak Test - Fluxo
echo 22. Spike Test - Criar filme
echo 23. Spike Test - Listar filmes
echo 24. Spike Test - Listar filme por id
echo 25. Spike Test - Atualizar filme
echo 26. Spike Test - Deletar filme
echo 27. Spike Test - Criar ticket
echo 28. Spike Test - Fluxo
echo 29. Stress Test - Criar filme
echo 30. Stress Test - Listar filmes
echo 31. Stress Test - Listar filme por id
echo 32. Stress Test - Atualizar filme
echo 33. Stress Test - Deletar filme
echo 34. Stress Test - Criar ticket
echo 35. Stress Test - Fluxo
echo 36. Sair
echo =====================================
set /p escolha="Digite o numero da sua escolha: "

if %escolha%==1 (
    cd /d "%~dp0"
    k6 run tests/movies/smoke/post.js
) else if %escolha%==2 (
    cd /d "%~dp0"
    k6 run tests/movies/smoke/get.js
) else if %escolha%==3 (
    cd /d "%~dp0"
    k6 run tests/movies/smoke/getId.js
) else if %escolha%==4 (
    cd /d "%~dp0"
    k6 run tests/movies/smoke/put.js
) else if %escolha%==5 (
    cd /d "%~dp0"
    k6 run tests/movies/smoke/delete.js
)else if %escolha%==6 (
    cd /d "%~dp0"
    k6 run tests/tickets/smoke/post.js
) else if %escolha%==7 (
    cd /d "%~dp0"
    k6 run tests/fluxo/smoke/principal.js
) else if %escolha%==8 (
    cd /d "%~dp0"
    k6 run tests/movies/load/post.js
) else if %escolha%==9 (
    cd /d "%~dp0"
    k6 run tests/movies/load/get.js
) else if %escolha%==10 (
    cd /d "%~dp0"
    k6 run tests/movies/load/getId.js
)else if %escolha%==11 (
    cd /d "%~dp0"
    k6 run tests/movies/load/put.js
) else if %escolha%==12 (
    cd /d "%~dp0"
    k6 run tests/movies/load/delete.js
) else if %escolha%==13 (
    cd /d "%~dp0"
    k6 run tests/tickets/load/post.js
) else if %escolha%==14 (
    cd /d "%~dp0"
    k6 run tests/fluxo/load/principal.js
) else if %escolha%==15 (
    cd /d "%~dp0"
    k6 run tests/movies/soak/post.js
)else if %escolha%==16 (
    cd /d "%~dp0"
    k6 run tests/movies/soak/get.js
) else if %escolha%==17 (
    cd /d "%~dp0"
    k6 run tests/movies/soak/getId.js
) else if %escolha%==18 (
    cd /d "%~dp0"
    k6 run tests/movies/soak/put.js
) else if %escolha%==19 (
    cd /d "%~dp0"
    k6 run tests/movies/soak/delete.js
) else if %escolha%==20 (
    cd /d "%~dp0"
    k6 run tests/tickets/soak/post.js
) else if %escolha%==21 (
    cd /d "%~dp0"
    k6 run tests/fluxo/soak/principal.js
) else if %escolha%==22 (
    cd /d "%~dp0"
    k6 run tests/movies/spike/post.js
) else if %escolha%==23 (
    cd /d "%~dp0"
    k6 run tests/movies/spike/get.js
) else if %escolha%==24 (
    cd /d "%~dp0"
    k6 run tests/movies/spike/getId.js
) else if %escolha%==25 (
    cd /d "%~dp0"
    k6 run tests/movies/spike/put.js
) else if %escolha%==26 (
    cd /d "%~dp0"
    k6 run tests/movies/spike/delete.js
) else if %escolha%==27 (
    cd /d "%~dp0"
    k6 run tests/tickets/spike/post.js
) else if %escolha%==28 (
    cd /d "%~dp0"
    k6 run tests/fluxo/spike/principal.js
) else if %escolha%==29 (
    cd /d "%~dp0"
    k6 run tests/movies/stress/post.js
) else if %escolha%==30 (
    cd /d "%~dp0"
    k6 run tests/movies/stress/get.js
) else if %escolha%==31 (
    cd /d "%~dp0"
    k6 run tests/movies/stress/getId.js
) else if %escolha%==32 (
    cd /d "%~dp0"
    k6 run tests/movies/stress/put.js
) else if %escolha%==33 (
    cd /d "%~dp0"
    k6 run tests/movies/stress/delete.js
) else if %escolha%==34 (
    cd /d "%~dp0"
    k6 run tests/tickets/stress/post.js
) else if %escolha%==35 (
    cd /d "%~dp0"
    k6 run tests/fluxo/stress/principal.js
) else if %escolha%==36 (
    echo Saindo...
    exit
) else (
    echo Escolha inválida. Tente novamente.
    pause
    goto :inicio
)
pause
goto :inicio