public class CountDiv {
    public static int solution(int A, int B, int K) {

//        { i : A ≤ i ≤ B, i mod K = 0 }
        int isDivisible = (B / K) - (A / K);
        System.out.println(isDivisible);
        if (A % K == 0) {
            isDivisible = isDivisible + 1;
        }
        return isDivisible;
    }

    public static void main(String args[]) {
        CountDiv CD = new CountDiv();
        System.out.println(CD.solution(6, 11, 2));
    }


}
