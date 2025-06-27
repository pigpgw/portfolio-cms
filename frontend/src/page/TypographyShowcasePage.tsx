import { Typography } from '@/components/ui/Typography';

export const TypographyShowcasePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      {/* display */}
      <Typography as="h1" variant="display">
        Display H1
      </Typography>
      <Typography as="div" variant="display">
        Display Div
      </Typography>

      {/* heading1 */}
      <Typography as="h1" variant="heading1">
        Heading1 H1
      </Typography>
      <Typography as="span" variant="heading1">
        Heading1 Span
      </Typography>

      {/* heading2 */}
      <Typography as="h2" variant="heading2">
        Heading2 H2
      </Typography>
      <Typography as="div" variant="heading2">
        Heading2 Div
      </Typography>

      {/* heading3 */}
      <Typography as="h3" variant="heading3">
        Heading3 H3
      </Typography>
      <Typography as="span" variant="heading3">
        Heading3 Span
      </Typography>

      {/* body1 */}
      <Typography as="p" variant="body1">
        Body1 P
      </Typography>
      <Typography as="span" variant="body1">
        Body1 Span
      </Typography>

      {/* body2 */}
      <Typography as="p" variant="body2">
        Body2 P
      </Typography>
      <Typography as="div" variant="body2">
        Body2 Div
      </Typography>

      {/* body3 */}
      <Typography as="p" variant="body3">
        Body3 P
      </Typography>
      <Typography as="span" variant="body3">
        Body3 Span
      </Typography>

      {/* button */}
      <Typography as="span" variant="button">
        Button Span
      </Typography>
      <Typography as="button" variant="button">
        Button
      </Typography>

      {/* caption */}
      <Typography as="span" variant="caption">
        Caption Span
      </Typography>
      <Typography as="div" variant="caption">
        Caption Div
      </Typography>
    </div>
  );
};
