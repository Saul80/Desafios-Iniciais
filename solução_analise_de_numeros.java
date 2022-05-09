import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class AnaliseNumeros {
    public static void main(String[] args) throws IOException {
        String linha;
        int Par, Impar, Neg, Pos, num;
        
        Par = Impar = Neg = Pos = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        for (int i = 0; i < 5; i++) {
            linha = br.readLine();
            num = Integer.parseInt(linha);
            
            if (num % 2 == 0) {
                Par++;
            } else {
                Impar++;
            }
            
            if (num < 0) {
                Neg++;
            } 
            if (num > 0) {
                Pos++;
            }
        }
        
        System.out.println("" + Par + " par(es)");
        System.out.println("" + Impar + " impar(es)");
        System.out.println("" + Pos + " positivo(s)");
        System.out.println("" + Neg + " negativo(s)");
    }
}
