import java.io.IOException;
import java.util.Scanner;

public class Desafio {
  public static void main(String[] args) throws IOException {
    Scanner leitor = new Scanner(System.in);
    int A = leitor.nextInt();
    int B = leitor.nextInt();
    int C = leitor.nextInt();
    int D = leitor.nextInt();
   
    System.out.println("DIFERENCA = " + (A * B - C * D));
  }
}
