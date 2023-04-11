
class BinaryGap {
    public static int solution(int N) {
        String bgstring = Integer.toString(N, 2);
        boolean started = false;
        int counter = 0;
        int maxCount = 0;

        for (int i = 0; i < bgstring.length(); i++) {
            String c = bgstring.substring(i, i + 1);

            if (c.equals("1")) {
                if (started) {
                    if (counter > maxCount) {
                        maxCount = counter;
                    }
                }
                counter = 0;
                started = true;
            }
            if (c.equals("0")) {
                counter++;
            }
        }
        return maxCount;


    }

    public static void main(String args[]) {
        BinaryGap gap = new BinaryGap();
        System.out.println(gap.solution(5));
    }

}

