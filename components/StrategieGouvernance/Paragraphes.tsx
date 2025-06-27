import { ContentStrategieMethodologie } from '@/constants';
import React from 'react'
import ImageKit from '../ui/ImageKit';
import Link from 'next/link';

const renderContent = (content: ContentStrategieMethodologie | string) => {
  if (typeof content === 'string') return <p>{content}</p>;

  if (!('type' in content)) return null;

  switch (content.type) {
    case 'image':
      return (
        <ImageKit
          src={content.value as string}
          alt={content.value as string || ''}
          width={1681}
          height={350}
          style={content.style}
          className={`w-full h-auto object-center object-cover mx-auto max-h-[440px] rounded-[25px] my-4 ${content.className}`}
        />
      );
    case 'array':
      return (
        <div className="rounded-[25px] overflow-auto md:overflow-hidden my-8 border-gray-300 border border-collapse text-[12px] md:text-[16px]">
          <table className="w-full table-auto">
            {content.headers && (
              <thead>
                <tr>
                  {content.headers.map((header, index) => (
                    <th key={index} className="border border-gray-300 p-2 bg-gray-500 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {(content.value as string[][]).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'link':
      return <Link href={content.href || ''} className='text-blue-700 block'>{content.value as string}</Link>;
    case 'concat':
      if (Array.isArray(content.value)) {
      return (
        <span className={`${content.className}`}>
        {content.value.map((item, index) => {
          if (typeof item === 'object' && 'type' in item) {
          if (item.type === 'link') {
            return (
            <Link key={index} href={item.href || ''} className='text-blue-700 inline'>
              {item.value as string}
            </Link>
            );
          }
          return <span key={index}>{item.value as string}</span>;
          }
          return <span key={index}>{item}</span>;
        })}
        </span>
      );
      }
      return <span className={content.className}>{content.value}</span>;

    default:
      return <p className={content.className}>{content.value as string}</p>;
  }
};

export const Paragraphe = ({ children, className = '' }: { children: React.ReactNode | (string | ContentStrategieMethodologie)[], className?: string }) => {
  if (Array.isArray(children)) {
    return (
      <div className={`block mb-8 ${className}`}>
        {children.map((content, index) => (
          <React.Fragment key={index}>
            {typeof content === 'string' ? <p>{content}</p> : renderContent(content)}
          </React.Fragment>
        ))}
      </div>
    );
  }
  return <p className={`block mb-8 ${className}`}>{children}</p>;
}

export const BorderedParagraphe = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="border rounded-[2rem] p-6">
      <Paragraphe className='font-medium'>{ children }</Paragraphe>
    </div>
  );
}

export const MediumParagraphe = ({ children }: { children: React.ReactNode}) => {
  return <Paragraphe className='font-medium'>{ children }</Paragraphe>;
}

export const SubtitleParagraphe = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paragraphe className="text-[3rem] leading-[57px] font-bold">
      { children }
    </Paragraphe>
  );
}

export type ParagrapheListing = {
  title?: string;
  paragraphes: (string | ContentStrategieMethodologie)[];
}

export const OlParagraphe = ({ title, paragraphes }: ParagrapheListing) => {
  return (
    <>
      <p className='underline'>{title}</p>
      <ol className='list-decimal mb-8 lg:ps-[4rem]'>
        {paragraphes.map((content, index) => (
          <li key={index} className={typeof content === 'object' && content.type === 'image' ? 'list-none' : ''}>
            {typeof content === 'string' ? <p>{content}</p> : renderContent(content)}
          </li>
        ))}
      </ol>
    </>
  );
}

export const UlParagraphe = ({ title, paragraphes }: ParagrapheListing) => {
  return (
    <>
      <p className="underline">{title}</p>
      <ul className="list-disc mb-8 lg:ps-[4rem]">
        {paragraphes.map((content, index) => (
          <li key={index} className={typeof content === 'object' && content.type === 'image' ? 'list-none' : ''}>
            {typeof content === 'string' ? <p>{content}</p> : renderContent(content)}
          </li>
        ))}
      </ul>
    </>
  );
}

