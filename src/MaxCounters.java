import java.util.Arrays;

public class MaxCounters {

    public int[] solution(int N, int[] A){
        int max = 0, applyMax = 0;;
        int[] result = new int[N];

        for (int i = 0; i < A.length; ++i) {
            int a = A[i];

            if (a == N + 1) {
                applyMax = max;
            }

            if (1 <= a && a <= N) {
                result[A[i] - 1] = Math.max(applyMax, result[A[i] - 1]);
                max = Math.max(max, ++result[A[i] - 1]);
            }
        }

        for (int i = 0; i < N; ++i) {
            if (result[i] < applyMax) {
                result[i] = applyMax;
            }
        }

        return result;
    }
    public static void main(String args[]) {
        MaxCounters MX = new MaxCounters();
        System.out.println(Arrays.toString(MX.solution(5, new int[]{3, 1, 2, 4, 3, 6, 1})));
    }
}
